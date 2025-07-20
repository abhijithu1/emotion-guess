// Facial expression data for the guessing game
// Each entry contains an image URL, the correct emotion, and hints

export type Expression = {
  image: string;
  emotion: string;
  hints: string[];
};

export const expressions: Expression[] = [
  {
    image: 'https://iili.io/FweoOHG.th.jpg)',
    emotion: 'happy',
    hints: [
      'This emotion is often shown when something good happens.',
      'It is usually accompanied by a smile.',
      'People feel this when they receive good news.'
    ]
  },
  {
    image: 'https://iili.io/Fwe5mcN.jpg',
    emotion: 'sad',
    hints: [
      'This emotion is often shown when something bad happens.',
      'It may involve tears or a frown.',
      'People feel this when they lose something important.'
    ]
  },
  {
    image: 'https://iili.io/Fwe1Pgj.jpg',
    emotion: 'angry',
    hints: [
      'This emotion is often shown when someone is upset or frustrated.',
      'It may involve a scowl or clenched teeth.',
      'People feel this when things do not go their way.'
    ]
  },
  {
    image: 'https://iili.io/FweMQe4.jpg',
    emotion: 'surprised',
    hints: [
      'This emotion is often shown when something unexpected happens.',
      'It may involve wide eyes and a dropped jaw.',
      'People feel this when they are caught off guard.'
    ]
  }
]; 