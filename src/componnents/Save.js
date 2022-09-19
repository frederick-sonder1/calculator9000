// import { axios } from 'axios';
// import { useEffect, useState } from 'react';





// function Results() {
//   const [results, setResults] = useState([]);
//   // console.log([results, setResults])
//   console.log('coucouézerfgh')

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = axios.get("http://localhost/calculator9000/src/dp.php");
//       setResults(response.data)
//       //  console.log(response);
//   console.log('coucoué5')

//     }
//     fetchData(useEffect);
//   }, [])

//   console.log(results)
//   console.log('coucoué')
//   console.log([results, setResults])
//   return (
//     <div>
//       <h1>Liste des résultats</h1>
//       {/* {results.map(item=>(<li>{item.name}</li>))}  */}
//       {'coucou'}
//     </div>

//   );
// }
// export default Results;













// const Results = _ => {
//   const [posts, setPosts] = useState([])

//   const url = "http://localhost/calculator9000/src/dp.php"

//   const postings = async () => {
//       try{
//           const res = await axios.get(url)
//           setPosts(res.data.data)
//       } catch (error) {
//           console.log('error')
//       }
//   }

//   useEffect( () =>  postings(), [])

//   return (
//      console.log(postings)
//       <h1>Posts</h1>
//       { posts && posts.map((myPost) =>
//           <ul key={myPost._id}>
//               <li>{myPost.title} : {myPost.content}</li>
//           </ul>
//       )}

//   )
// }

// export default Results


















// const MyComponent = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([])

//   useEffect(() => {
//     const fetchData = async () =>{
//       setLoading(true);
//       try {
//         const {data: response} = await axios.get('/http://localhost/calculator9000/src/dp.php');
//         setData(response);
//       } catch (error) {
//         console.error(error.message);
//       }
//       setLoading(false);
//     }

//     fetchData();
//   }, []);
//   return (
//     <div>
//     {loading && <div>Loading</div>}
//     {!loading && (
//       <div>
//         <h2>Doing stuff with data</h2>
//         {console.log(data)}
//         {data.map(item => (<span>{item.name}</span>))}
//       </div>
//     )}
//     </div>
//   )
// }

// export default MyComponent;

















// async function doGetRequest() {

//   let res = await axios.get('http://localhost/calculator9000/src/dp.php');

//   let data = res.data;
//   console.log(data);

// }
// export default doGetRequest();











function Results() {
  fetch('http://localhost/calculator9000/src/dp.php',
  {
    mode: 'no-cors',
      method: "POST",
        headers: { 'Accept': 'application/json', 
        'Content-Type': ' application/json', 
        'X-API-SERVER': '85499f9f' },
      })
      // console.log('coucoué')
  .then(response => response.json())
  //  console.log('coucou11')
  .then(data =>{
    console.log(data);
    // console.log('coucou22')
  });
  // var rawResponse = await fetch('http://localhost/calculator9000/src/dp.php');
  // var response = await rawResponse.json();
// console.log('coucou33')
}
export default Results;



// function Results() {
//   const [dataStatus, setDataStatus] = useState('loading...');

//   useEffect(() => {
//     async function loadData() {
//       const rawResponse = await fetch('http://localhost/calculator9000/src/dp.php');
//       const data = await rawResponse.json();
//       setDataStatus("data loaded:" +data.resultat+ "...");
//       console.log(dataStatus);
//     }
//     loadData();
//     console.log(dataStatus);
//   },[dataStatus]);
//   return ( <h1>{dataStatus}</h1>
//   );
// }
// export default Results;











// function Results(){
//   const self = this;
//   axios
//     .get("http://localhost/calculator9000/src/dp.php")
//     .then(function (response) {
//       self.setState({
//         employees: response.data,
//       });
//       console.log(self)
//     });
//   };
// export default Results();