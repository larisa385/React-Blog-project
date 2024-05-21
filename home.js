import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {

   const [name, setName] = useState('Larisa');
   const [age, setAge] = useState(21);
   const [blogs, setBlogs] = useState([
    {title: "welcome party", body: 'lorem ipsum...', author: 'larisa', id: 1},
    {title: "my new website", body: 'lorem ipsum...', author: 'ivy', id: 2},
    {title: "tips and tricks", body: 'lorem ipsum...', author: 'sarah', id: 3}
   ]);

   const [leName, setLeName] = useState('matea')

   const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
   }

   useEffect (() => {
    console.log('use effect thing')
    console.log(blogs)
    console.log(leName,)
   }, [leName]);

    const handleClick = () => {
        console.log('hello fellow visitor')
        setName('Šlarisa')
        setAge(22)
    }
    return ( 
        <div className="home">
            <h2>homepage</h2>
            <p>Hiyya {name}. You are {age}  yrs old.</p>
            <button onClick={handleClick}>Click me</button>
          <BlogList blogs={blogs}  title="All blogs"  handleDelete={handleDelete}/>
          <button onClick={() => setLeName('martin')}>change Le name</button>
          <p>{ leName}</p>
        </div>
    );
}
 
export default Home;
