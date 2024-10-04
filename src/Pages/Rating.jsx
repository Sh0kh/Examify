import React, { useEffect, useState } from 'react'
import Top3 from '../Components/Rating/Top3'
import Table from '../Components/Rating/Table'
import axios from '../Service/axios'
import ReactLoading from 'react-loading';
function Rating() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const getResult = async ()=>{
    try{
      const response = await axios.get('/ielts/exam/result/top-exam-result/MONTHLY?page=0&size=10')
      setData(response.data.results || []);
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getResult()
  },[])

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
      </div>
    );
  }
  return (
    <div className='Rating'>
        <Top3 data={data}/>
        <Table data={data}/>
    </div>
  )
}

export default Rating