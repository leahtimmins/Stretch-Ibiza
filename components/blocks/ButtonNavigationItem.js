const { default: Link } = require("next/link")

const ButtonNavigationItem = ({blok}) => {
    const {
        link,
        label
    } = blok;

    return (
        <Link href="/" title="" className="border py-2 px-4">
            {label}
        </Link>
    )
}

export default ButtonNavigationItem;