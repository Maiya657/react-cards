interface CardProps {
  children?: React.ReactNode;
  title: string;
  text: string;
  href: string; 
  linkTitle: string;
}

export default function Card({ children, title, text, href, linkTitle }: CardProps) {
  return (
    <div className="card">
      { children }
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">{ text }</p>
        <a href={ href } className="btn btn-primary">{ linkTitle }</a>
      </div>
    </div>
  );
}