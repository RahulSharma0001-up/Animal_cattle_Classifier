import { useEffect, useMemo, useRef, useState } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

const fallbackAdvice = {
  cattle: 'The classifier found strong cattle-like detections. Compare with healthy herd profiles when reviewing results.',
  buffalo: 'The classifier found buffalo-specific features. Confirm animal type and continue management tracking.',
  unknown: 'No confident cattle or buffalo match was found. Try another image taken from the side or with clearer features.',
};

function Classify() {
  const [model, setModel] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState('Loading classification model…');
  const [preview, setPreview] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [pendingFile, setPendingFile] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    setStatus('Preparing classification engine…');

    mobilenet.load().then((loadedModel) => {
      if (!mounted) return;
      setModel(loadedModel);
      setLoaded(true);
      setStatus('Ready to classify. Upload an image to begin.');
    }).catch(() => {
      if (!mounted) return;
      setStatus('Failed to load model. Please refresh the page.');
    });

    return () => {
      mounted = false;
    };
  }, []);

  const classification = useMemo(() => {
    if (!predictions.length) return null;
    const topLabels = predictions.map((prediction) => prediction.className.toLowerCase());
    const cattleMatch = topLabels.find((label) =>
      label.includes('cow') ||
      label.includes('bull') ||
      label.includes('ox') ||
      label.includes('zebu') ||
      label.includes('calf')
    );
    const buffaloMatch = topLabels.find((label) =>
      label.includes('water buffalo') ||
      label.includes('buffalo') ||
      label.includes('bison') ||
      label.includes('yak')
    );

    if (buffaloMatch) {
      return {
        type: 'Buffalo',
        confidence: predictions[0]?.probability ?? 0,
        advice: fallbackAdvice.buffalo,
      };
    }
    if (cattleMatch) {
      return {
        type: 'Cattle',
        confidence: predictions[0]?.probability ?? 0,
        advice: fallbackAdvice.cattle,
      };
    }
    return {
      type: 'Unknown',
      confidence: predictions[0]?.probability ?? 0,
      advice: fallbackAdvice.unknown,
    };
  }, [predictions]);

  useEffect(() => {
    if (!loaded || !pendingFile) return;

    const url = URL.createObjectURL(pendingFile);
    const image = new Image();
    image.src = url;
    image.crossOrigin = 'anonymous';
    image.onload = async () => {
      await classifyImage(image);
      setPendingFile(null);
    };
  }, [loaded, pendingFile]);

  const classifyImage = async (image) => {
    try {
      const results = await model.classify(image, 6);
      setPredictions(results);
      setStatus('Classification complete. Review the top matches below.');
    } catch (err) {
      setStatus('Unable to classify this image. Use another photo or try again.');
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    setStatus('Preparing your image for classification…');
    setPredictions([]);

    if (!loaded) {
      setPendingFile(file);
      setStatus('Model is still loading. Your image will be classified automatically when ready.');
      return;
    }

    const image = new Image();
    image.src = url;
    image.crossOrigin = 'anonymous';
    image.onload = async () => {
      await classifyImage(image);
    };
  };

  return (
    <section className="section-card">
      <div className="split-grid">
        <div className="glass-panel">
          <div className="hero-eyebrow">Image Based Animal Classification</div>
          <h2>Upload cattle or buffalo images for intelligent type detection.</h2>
          <p>
            This production-ready React page uses TensorFlow.js and MobileNet to infer animal type from your uploaded photo. It delivers a polished farm-tech workflow with image preview, prediction details, and confidence checks.
          </p>

          <div className="upload-zone">
            <label htmlFor="image-upload">Choose a photo</label>
            <input
              ref={inputRef}
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={!loaded}
            />
            <p style={{ marginTop: '14px', color: 'var(--muted)' }}>
              Supported formats: JPG, PNG, WEBP. Clear side views work best.
            </p>
          </div>

          <div className="result-panel" style={{ marginTop: '24px' }}>
            <h3>Status</h3>
            <p>{status}</p>
            {classification && (
              <>
                <div className="badge">Detected: {classification.type}</div>
                <p className="result-score">Confidence: {(classification.confidence * 100).toFixed(1)}%</p>
                <p style={{ marginTop: '12px' }}>{classification.advice}</p>
              </>
            )}
          </div>
        </div>

        <div>
          <div className="preview-panel">
            {preview ? (
              <img src={preview} alt="Uploaded preview" />
            ) : (
              <div className="upload-zone" style={{ padding: '40px 24px' }}>
                <p style={{ margin: 0, color: 'var(--muted)' }}>
                  Upload a cattle or buffalo image to generate predictions.
                </p>
              </div>
            )}
          </div>

          {predictions.length > 0 && (
            <div className="result-panel" style={{ marginTop: '24px' }}>
              <h3>Top predictions</h3>
              <ul className="progress-list">
                {predictions.map((prediction) => (
                  <li key={prediction.className}>
                    <span>{prediction.className}</span>
                    <strong>{(prediction.probability * 100).toFixed(1)}%</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Classify;
