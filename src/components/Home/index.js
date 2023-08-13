import "./index.css"
const Home = ()=>{
   return(
    <div className="container">
        <div className="container1">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" className="imag"/>
           <h1 className="head1">HTML</h1>
           <p className="para1">HTML is Hyper Text Markup Language. It is used for creating the html elements for a website</p>
        </div>
        <div className="container1">
            <img src="https://img.freepik.com/free-icon/css_318-698167.jpg" className="imag"/>
           <h1 className="head1">CSS</h1>
           <p className="para1">Css is Cascading Style Sheet which is used for styling the html elements for a website</p>
        </div>
        <div className="container1">
            <img src="https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-custom-events.png" className="imag"/>
           <h1 className="head1">Javascript</h1>
           <p className="para1">Javascript is a programming language. It is used for creating the dyanamicness for the website.</p>
        </div>
        <div className="container1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" className="imag"/>
           <h1 className="head1">SQL</h1>
           <p className="para1">SQL is Structured Qyery Language. It is used for dealing with the data stored in the database.</p>
        </div>
    </div>
   )
}
export default Home