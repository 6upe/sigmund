export default function TeamMemberPage({
  params,
}: {
  params: { member: string }
}) {
  return <h1>Team Member: {params.member}</h1>
}
