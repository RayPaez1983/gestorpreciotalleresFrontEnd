import CustomTable from "@/src/components/commons/CustomTable";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8080/masterwwsc/reoperation');
  const data = await res.json();
  
  return {
    props: { data }
  }
}

const  MyPage = (data: any) => {
  // use the fetched data here
  console.log(data)
  return(
    <>
    <CustomTable/>
    </>
    
  )
}

export default MyPage;