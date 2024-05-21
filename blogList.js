const BlogList = ({blogs, title, handleDelete}) => {
    return (
        <div className="blog-list">  {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author} <br /> text: {blog.body}</p>
                <button onClick={() => handleDelete(blog.id)}>delete blog</button>
            </div>
        ))}
        </div>
    );
}

export default BlogList;
