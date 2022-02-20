// import classes from '../cssmodules/Home.module.css';
import { useState } from 'react';
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
const [blogs,setBlogs] = useState([
    {title:'My new website ',body:'lorem ipsum dolor sit amit',author:'mario', id:1},
    {title:'Welcome party ',body:'lorem ipsum dolor sit amit',author:'yoshi', id:2},
    {title:'Web dev top tips ',body:'lorem ipsum dolor sit amit',author:'mario', id:3},
    {title:'Web maroon UI ',body:'lorem ipsum dolor sit amit',author:'mario', id:4}
]);

const handleDelete =(id) =>{
    const newBlogs = blogs.filter( blogs =>blogs.id !==id );
    setBlogs(newBlogs)
}
    return ( 
        <div className="homes">
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
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
