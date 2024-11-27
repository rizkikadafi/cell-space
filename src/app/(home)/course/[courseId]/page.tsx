export default async function Page({
  params,
}: {
  params: Promise<{ courseId: string }>
}) {
  const courseId = (await params).courseId
  return <h1>Course {courseId}</h1>
}
