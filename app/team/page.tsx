// src/app/team/page.tsx
export default function TeamPage() {
  const members = ['john', 'mary', 'alex']

  return (
    <>
      <h1>Our Team</h1>
      <ul>
        {members.map(m => (
          <li key={m}>
            <a href={`/team/${m}`}>{m}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
