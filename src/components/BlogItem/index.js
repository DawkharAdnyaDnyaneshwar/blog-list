import './index.css'

const BlogItem = props => {
  const {itemDetail} = props
  const {title, description, publishedDate} = itemDetail
  return (
    <li className="eachItem">
      <div className="name-date-container">
        <h2 className="title">{title}</h2>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}

export default BlogItem
