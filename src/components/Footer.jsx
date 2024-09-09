import { resourcesLinks, platformLinks,communityLinks } from "../constants"

const Footer = () => {
  return (
<footer className="mt-20 border-t py-10 border border-neutral-700">
    <div className="mx-3 grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        <div>
            <h3 className="text-md font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
                {resourcesLinks.map((link, index) => (
                    <li key={index}>
                        <a 
                            className='text-neutral-500 hover:dark:text-white hover:text-black' 
                            href={link.href} 
                            target={link.target || "_self"} 
                            rel={link.rel || ""}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Plataformas</h3>
            <ul className="space-y-2">
                {platformLinks.map((link, index) => (
                    <li key={index}>
                        <a 
                            className='text-neutral-500 hover:dark:text-white hover:text-black' 
                            href={link.href}
                            target={link.target || "_self"} 
                            rel={link.rel || ""}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                    <li key={index}>
                        <a className='text-neutral-500 hover:dark:text-white hover:text-black' href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
</footer>
  )
}

export default Footer