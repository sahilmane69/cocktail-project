
import navlinks from '../../constants/index.js'

export const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#home" className='flex items-center gap-2'>
          <img src="/images/logo.png" alt="logo" />
          <p>velvet pour</p>
        </a>
        <ul>
          {navlinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} >{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar