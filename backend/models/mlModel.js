const tf = require('@tensorflow/tfjs-node');

exports.trainLinearRegression = async (data) => {
  const xs = data.map(d => d.timeSpent);
  const ys = data.map(d => d.questionsSolved);

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

  const xsTensor = tf.tensor2d(xs, [xs.length, 1]);
  const ysTensor = tf.tensor2d(ys, [ys.length, 1]);

  await model.fit(xsTensor, ysTensor, { epochs: 100 });

  return model;
};

exports.trainLogisticRegression = async (data) => {
  const xs = data.map(d => d.timeSpent);
  const ys = data.map(d => d.questionsSolved > 0 ? 1 : 0);

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1], activation: 'sigmoid' }));

  model.compile({ loss: 'binaryCrossentropy', optimizer: 'sgd' });

  const xsTensor = tf.tensor2d(xs, [xs.length, 1]);
  const ysTensor = tf.tensor2d(ys, [ys.length, 1]);

  await model.fit(xsTensor, ysTensor, { epochs: 100 });

  return model;
};