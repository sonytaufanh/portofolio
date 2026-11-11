import { useEffect, useState } from 'react'

/** Mengembalikan teks yang diketik bergantian dari daftar (typewriter). */
export default function useTypewriter(words, typeMs = 70, deleteMs = 35, holdMs = 1700) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words?.length) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setText(words[0])
      return
    }

    const word = words[index % words.length]
    let delay = deleting ? deleteMs : typeMs

    if (!deleting && text === word) {
      delay = holdMs
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1)
        setText(next)
        if (next === word) setDeleting(true)
      } else {
        setText(word.slice(0, text.length - 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs])

  return text
}
