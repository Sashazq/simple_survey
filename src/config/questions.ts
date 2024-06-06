import { shaffleArray } from "../utils/shaffle";
export const QUESIONS = [
  //example
  //   {
  //     question: "QUestion text?",
  //     options: [
  //       { text: "text1", isAnswer: false },
  //       { text: "text2", isAnswer: true },
  //     ],
  //   },
  {
    question: "В каком году покрестили Польшу ?",

    options: [
      { text: "1385", isAnswer: false },

      { text: "1364", isAnswer: false },

      { text: "966", isAnswer: true },

      { text: "1794", isAnswer: false },

      { text: "1025", isAnswer: false },

      { text: "1000", isAnswer: false },

      { text: "1791", isAnswer: false },
    ],
  },

  {
    question: "Что произошло в 1000 году в Польше?",

    options: [
      { text: "Bitwa pod Wiedniem", isAnswer: false },

      { text: "Bitwa pod Grunwaldem", isAnswer: false },

      { text: "Uchwalenie Konstytucji 3 maja", isAnswer: false },

      { text: "Unia w Kewie", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Zajazd gniezienski. Otton III", isAnswer: true },

      { text: "Koronacja Boleslawa I", isAnswer: false },
    ],
  },

  {
    question: "1025",

    options: [
      { text: "Bitwa pod Wiedniem", isAnswer: false },

      { text: "Bitwa pod Grunwaldem", isAnswer: false },

      { text: "Uchwalenie Konstytucji 3 maja", isAnswer: false },

      { text: "Unia w Kewie", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Koronacja Boleslawa I Chrobry", isAnswer: true },

      { text: "Potop SzwedskiI", isAnswer: false },
    ],
  },

  {
    question: "1364",

    options: [
      { text: "Bitwa pod Wiedniem", isAnswer: false },

      { text: "Bitwa pod Grunwaldem", isAnswer: false },

      { text: "Uchwalenie Konstytucji 3 maja", isAnswer: false },

      { text: "Unia w Kewie", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: true },

      { text: "Potop SzwedskiI", isAnswer: false },
    ],
  },

  {
    question: "1385",

    options: [
      { text: "Bitwa pod Wiedniem", isAnswer: false },

      { text: "Bitwa pod Grunwaldem", isAnswer: false },

      { text: "Uchwalenie Konstytucji 3 maja", isAnswer: false },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Unia w Krewie. Polska i Litwa", isAnswer: true },

      { text: "Potop Szwedski", isAnswer: false },
    ],
  },

  {
    question: "1410",

    options: [
      { text: "Bitwa pod Wiedniem", isAnswer: false },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      { text: "Uchwalenie Konstytucji 3 maja", isAnswer: false },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Bitwa pod Grunwaldem", isAnswer: true },

      { text: "Potop Szwedski", isAnswer: false },
    ],
  },

  {
    question: "1655",

    options: [
      { text: "Bitwa pod Wiedniem", isAnswer: false },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      { text: "Uchwalenie Konstytucji 3 maja", isAnswer: false },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Potop Szwedski", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1683",

    options: [
      { text: "Bitwa Warszawska “Cud nad Wislem”", isAnswer: false },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      { text: "Uchwalenie Konstytucji 3 maja", isAnswer: false },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Bitwa pod Wiedniem", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1791",

    options: [
      { text: "Bitwa Warszawska “Cud nad Wislem”", isAnswer: false },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      { text: "Potop Szwedski", isAnswer: false },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Uchwalenie Konstytucji 3 maja", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1794",

    options: [
      { text: "Bitwa Warszawska “Cud nad Wislem”", isAnswer: false },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      { text: "Potop Szwedski", isAnswer: false },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Powstanie Kosciuszkowskie", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1795",

    options: [
      { text: "Bitwa Warszawska “Cud nad Wislem”", isAnswer: false },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      { text: "Potop Szwedski", isAnswer: false },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Rozbior Polski Rosja, Prusy, Austria", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1863",

    options: [
      { text: "Bitwa Warszawska “Cud nad Wislem”", isAnswer: false },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      { text: "Potop Szwedski", isAnswer: false },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Postanie styczniowe", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1918",

    options: [
      { text: "Bitwa Warszawska “Cud nad Wislem”", isAnswer: false },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      { text: "Potop Szwedski", isAnswer: false },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      {
        text: "Odzyskanie niepodleglosci Polski po I wojne swiatowej",
        isAnswer: true,
      },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1920",

    options: [
      {
        text: "Odzyskanie niepodleglosci Polski po I wojne swiatowej”",
        isAnswer: false,
      },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      {
        text: "Odzyskanie niepodleglosci Polski po I wojne swiatowej",
        isAnswer: false,
      },

      { text: "Powstanie styczniowe", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Bitwa Warszawska “Cud nad Wislem” ", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1939",

    options: [
      {
        text: "Odzyskanie niepodleglosci Polski po I wojne swiatowej”",
        isAnswer: false,
      },

      { text: "Utworzenie Akademii Krakowskej", isAnswer: false },

      {
        text: "Odzyskanie niepodleglosci Polski po I wojne swiatowej",
        isAnswer: false,
      },

      { text: "Bitwa Warszawska “Cud nad Wislem", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Atak na Polske. II swiiatowa wojna” ", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1944",

    options: [
      {
        text: "Odzyskanie niepodleglosci Polski po I wojne swiatowej”",
        isAnswer: false,
      },

      { text: "Atak na Polske. II swiiatowa wojna", isAnswer: false },

      {
        text: "Odzyskanie niepodleglosci Polski po I wojne swiatowej",
        isAnswer: false,
      },

      { text: "Bitwa Warszawska “Cud nad Wislem", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Powstanie Warszawskie” ", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },

  {
    question: "1980",

    options: [
      {
        text: "Odzyskanie niepodleglosci Polski po I wojne swiatowej”",
        isAnswer: false,
      },

      { text: "Atak na Polske. II swiiatowa wojna", isAnswer: false },

      { text: "Powstanie Warszawskie", isAnswer: false },

      { text: "Bitwa Warszawska “Cud nad Wislem", isAnswer: false },

      { text: "Chrzest Polski", isAnswer: false },

      { text: "Poczatek Solidarnosci” ", isAnswer: true },

      { text: "Zajazd gniezienski. Otton III", isAnswer: false },
    ],
  },
];

interface IQUestionOption {
  text: string;
  isAnswer: boolean;
}
interface IQuestion {
  question: string;
  options: IQUestionOption[];
}

export function getQuestions(): IQuestion[] {
  return QUESIONS.map((item) => ({
    ...item,
    options: shaffleArray<IQUestionOption>(item.options),
  }));
}
