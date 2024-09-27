import Link from "next/link";

type Props = {
  text: string;
  link: string;
  selected: boolean;
  onClick: () => void;
};

const MenuItem = ({ text, link, selected, onClick }: Props) => {
  return selected ? (
    <li className="border-spacing-8 border-b-2 border-borderColor">{text}</li>
  ) : (
    <Link href={link}>
      <li
        className="border-spacing-8 transition-all hover:border-b-2 hover:border-borderColor"
        onClick={onClick}
      >
        {text}
      </li>
    </Link>
  );
};

export default MenuItem;
