// import classes from '../cssmodules/Home.module.css';
import { useState,useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    // const handlecheck =(e) =>{
    //     console.log('hello Ninja',e) //event take i function with onClick
    // }
// const handlecheckAgain=(name,e) =>{
//     console.log('hello ' + name,e.target);
// }
// const [name,setName] = useState('Mario');
// const [age,setAge] =useState(25);
// const handlecheck=()=>{
//     setName('Luigi');
//     setAge(30);
// }
// const handleDelete =(id) =>{
    
//     const newBlogs = blogs.filter( item =>item.id !==id );
//     // console.log(newBlogs);
//     setBlogs(newBlogs)
// }
const [blogs,setBlogs] = useState(null);
const [isPending,setisPending] = useState(true);
const [error,setError] =useState(null);
useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res =>{
        if(!res.ok){
            throw Error('Could not intiate request')
        }
       return res.json();
    })
    .then(data =>{
        // console.log(data);
        setBlogs(data);
        setisPending(false);
        setError(null);
    })
    .catch(err =>{
        setisPending(false);
        setError(err.message);
        console.log(err.message);
    });
    },[]);//only once called becausre of empty array [] at end of useeffect
   
  
    return ( 
        <div className="homes">
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        { blogs && <BlogList blogs={blogs} title="All blogs" />} 
        {/* here Logical and is used because if page render with intaila value of null there will be rror so when logical end is intaiated it will check from left if value are true then only second statement is executed as for logical and to work side should ne non-null value  */}
     
        {/* <BlogList blogs={blogs.filter((blogs)=>
            blogs.author==='mario'
        )} title="Marios blogs" /> */}
        {/* <h2>Home</h2>
        <p>{name} is {age} year old</p>
        <button onClick={handlecheck}>Click me</button> */}
            {/* <button onClick={ (e) =>handlecheckAgain('Mario',e)}>Click me again</button> */} 
            {/* data fl0w  */}
        </div>
     );
}
 
export default Home;
