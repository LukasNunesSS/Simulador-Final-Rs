
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [step, setStep] = useState(0);
  const [modelo, setModelo] = useState('');
  const [largura, setLargura] = useState(100);
  const [comprimento, setComprimento] = useState(200);
  const [pessoas, setPessoas] = useState(4);
  const [pe, setPe] = useState('');
  ...
}
