interface GenreResponseProps {
  genre: {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  };
}

export function SideBar(props: GenreResponseProps) {
  // Complete aqui

  return (
    <header>
      <span className="category">
        Categoria:<span> {props.genre.title}</span>
      </span>
    </header>
  );
}
