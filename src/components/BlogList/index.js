import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-container">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} itemDetail={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
