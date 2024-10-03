const elements = [
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "K",
  "Ar",
  "Ca",
  "Sc",
  "Ti",
  "V",
  "Cr",
  "Mn",
  "Fe",
  "Ni",
  "Co",
  "Cu",
  "Zn",
  "Ga",
  "Ge",
  "As",
  "Se",
  "Br",
  "Kr",
  "Rb",
  "Sr",
  "Y",
  "Zr",
  "Nb",
  "Mo",
  "Tc",
  "Ru",
  "Rh",
  "Pd",
  "Ag",
  "Cd",
  "In",
  "Sn",
  "Sb",
  "Te",
  "I",
  "Xe",
  "Cs",
  "Ba",
  "La",
  "Ce",
  "Pr",
  "Nd",
  "Pm",
  "Sm",
  "Eu",
  "Gd",
  "Tb",
  "Dy",
  "Ho",
  "Er",
  "Tm",
  "Yb",
  "Lu",
  "Hf",
  "Ta",
  "W",
  "Re",
  "Os",
  "Ir",
  "Pt",
  "Au",
  "Hg",
  "Tl",
  "Pb",
  "Bi",
  "Th",
  "Pa",
  "U",
  "Np",
  "Pu",
  "Am",
  "Cm",
  "Bk",
  "Cf",
  "Es",
  "Fm",
  "Md",
  "No",
  "Lr",
  "Rf",
  "Db",
  "Sg",
  "Bh",
  "Hs",
  "Mt",
  "Ds",
  "Rg",
  "Cn",
  "Nh",
  "Fl",
  "Mc",
  "Lv",
  "Ts",
  "Og",
];

const breakify = (arr: { letter: string; isElement: boolean }[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const one = arr[i].letter.toUpperCase();
    const two = one + arr[i + 1].letter.toLowerCase();

    if (elements.includes(two)) {
      arr[i].isElement = true;
      arr[i + 1].isElement = true;
      break;
    } else if (elements.includes(one)) {
      arr[i].isElement = true;
      break;
    }
  }
};

const Break = (props: {
  firstName: string;
  middleName: string;
  lastName: string;
}) => {
  const firstAsArray = props.firstName
    .split("")
    .map((letter: string) => ({ letter: letter, isElement: false }));
  const LastAsArray = props.lastName
    .split("")
    .map((letter: string) => ({ letter: letter, isElement: false }));
  const middleAsArray = props.middleName
    .split("")
    .map((letter: string) => ({ letter: letter, isElement: false }));
  breakify(firstAsArray);
  breakify(middleAsArray);
  breakify(LastAsArray);

  return (
    <div className=" breakingbad ">
      <div>
        {firstAsArray.map((tuple: { letter: string; isElement: boolean }) => (
          <span
            style={{
              backgroundColor: tuple.isElement ? "green" : "black",
              padding: tuple.isElement ? "3px" : "0px",
            }}
          >
            {tuple.letter}
          </span>
        ))}
      </div>
      <div>
        {middleAsArray.map((tuple: { letter: string; isElement: boolean }) => (
          <span
            style={{
              backgroundColor: tuple.isElement ? "green" : "black",
              padding: tuple.isElement ? "3px" : "0px",
            }}
          >
            {tuple.letter}
          </span>
        ))}
      </div>
      <div>
        {LastAsArray.map((tuple: { letter: string; isElement: boolean }) => (
          <span
            style={{
              backgroundColor: tuple.isElement ? "green" : "black",
              padding: tuple.isElement ? "3px" : "0px",
            }}
          >
            {tuple.letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Break;
