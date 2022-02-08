import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  return (
    <>
      <h1 className="text-7xl font-bold">main home</h1>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
