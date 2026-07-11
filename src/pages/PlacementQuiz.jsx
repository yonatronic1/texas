import React, { useMemo, useState } from 'react';

const questions = [
  {
    id: 1,
    prompt: 'If I ___ more time, I would read more books.',
    options: [
      { label: 'a) have', value: 'a' },
      { label: 'b) had', value: 'b' },
      { label: 'c) will have', value: 'c' },
    ],
    answer: 'b',
  },
  {
    id: 2,
    prompt: 'Which sentence is correct?',
    options: [
      { label: 'a) He don’t like tea.', value: 'a' },
      { label: 'b) He doesn’t like tea.', value: 'b' },
      { label: 'c) He doesn’t likes tea.', value: 'c' },
    ],
    answer: 'b',
  },
  {
    id: 3,
    prompt: 'The students must ___ their homework before class.',
    options: [
      { label: 'a) complete', value: 'a' },
      { label: 'b) forget', value: 'b' },
      { label: 'c) lose', value: 'c' },
    ],
    answer: 'a',
  },
  {
    id: 4,
    prompt: 'Choose the best synonym for "angry".',
    options: [
      { label: 'a) happy', value: 'a' },
      { label: 'b) upset', value: 'b' },
      { label: 'c) calm', value: 'c' },
    ],
    answer: 'b',
  },
  {
    id: 5,
    prompt: 'Hana enjoys cooking traditional food, but she prefers trying new international recipes. What does Hana prefer?',
    options: [
      { label: 'a) Traditional food', value: 'a' },
      { label: 'b) International recipes', value: 'b' },
      { label: 'c) She doesn’t like cooking', value: 'c' },
    ],
    answer: 'b',
  },
  {
    id: 6,
    prompt: 'The teacher postponed the exam because many students were sick. Why was the exam postponed?',
    options: [
      { label: 'a) The teacher was busy', value: 'a' },
      { label: 'b) Many students were sick', value: 'b' },
      { label: 'c) The exam was too hard', value: 'c' },
    ],
    answer: 'b',
  },
  {
    id: 7,
    prompt: 'Which sentence is more polite for an email?',
    options: [
      { label: 'a) Send me the file now.', value: 'a' },
      { label: 'b) Could you please send me the file?', value: 'b' },
      { label: 'c) I want the file quickly.', value: 'c' },
    ],
    answer: 'b',
  },
  {
    id: 8,
    prompt: 'Which sentence uses correct punctuation?',
    options: [
      { label: 'a) I visited Addis Ababa, Bahir Dar, and Gondar.', value: 'a' },
      { label: 'b) I visited Addis Ababa Bahir Dar and Gondar.', value: 'b' },
      { label: 'c) I visited Addis Ababa, Bahir Dar and Gondar.', value: 'c' },
    ],
    answer: 'a',
  },
  {
    id: 9,
    prompt: 'Choose the best response: "Would you mind helping me with this project?"',
    options: [
      { label: 'a) Yes, I don’t mind.', value: 'a' },
      { label: 'b) No, I won’t help.', value: 'b' },
      { label: 'c) Sure, I will help you.', value: 'c' },
    ],
    answer: 'a',
  },
  {
    id: 10,
    prompt: 'Which sentence shows the correct use of past perfect tense?',
    options: [
      { label: 'a) She had finished her homework before dinner.', value: 'a' },
      { label: 'b) She finished her homework before dinner.', value: 'b' },
      { label: 'c) She finishes her homework before dinner.', value: 'c' },
    ],
    answer: 'a',
  },
];

export default function PlacementQuiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      return answers[question.id] === question.answer ? total + 1 : total;
    }, 0);
  }, [answers]);

  const level = useMemo(() => {
    if (score <= 3) return 'Beginner';
    if (score <= 7) return 'Intermediate';
    return 'Advanced';
  }, [score]);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen w-full bg-white pt-20 pb-12 transition-colors duration-300 dark:bg-black sm:pt-24 sm:pb-20">
      <section className="bg-white dark:bg-black py-12 sm:py-16 transition-colors duration-300">
        <div className="container-custom px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">English Placement Quiz</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Try this intermediate placement quiz to see your current English level before registration.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="container-custom px-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((question, index) => (
              <div key={question.id} className="glass rounded-xl p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-3">
                  {index + 1}. {question.prompt}
                </h2>
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <label key={option.value} className="flex items-start gap-3 rounded-lg border border-gray-200 dark:border-zinc-800 p-3 hover:bg-blue-50/70 dark:hover:bg-zinc-800 transition cursor-pointer">
                      <input
                        type="radio"
                        name={`q-${question.id}`}
                        value={option.value}
                        checked={answers[question.id] === option.value}
                        onChange={() => handleChange(question.id, option.value)}
                        className="mt-1 h-4 w-4 text-blue-600"
                      />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-blue-100 dark:border-zinc-800 bg-blue-50 dark:bg-zinc-900 p-4 sm:p-6 transition-colors duration-300">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">Ready to see your result?</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Your score will be shown immediately after submission.</p>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="btn-primary btn-premium px-5 py-2.5">Submit Quiz</button>
                <button type="button" onClick={handleReset} className="btn-secondary btn-premium px-5 py-2.5">Reset</button>
              </div>
            </div>
          </form>

          {submitted && (
            <div className="mt-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-600 to-blue-500 p-6 sm:p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Your Result</h3>
              <p className="text-lg mb-3">
                You got <span className="font-bold text-yellow-300">{score}/10</span> correct.
              </p>
              <p className="text-lg mb-4">
                Level: <span className="font-bold">{level}</span>
              </p>
              <div className="rounded-lg bg-white/15 p-4 text-sm sm:text-base">
                <p className="font-semibold mb-2">Reminder</p>
                <p>Please tell us the real score you got when you took the quiz first when contacting us for registration.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
