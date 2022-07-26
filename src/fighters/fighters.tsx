import { Fighter } from "./fighter";

const Fighters: Fighter[] = [
  {
    id: 1,
    name: "Marvin Vettori",
    nickname: "The Italian Dream",
    age: 28,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-04/68737%252Fprofile-galery%252Ffullbodyleft-picture%252FVETTORI_MARVIN_L_04-10.png?VersionId=null&itok=bcHcMyIK",
    stance: "Southpaw",
    origin: "Trento, Italy",
    record: "18-5-1",
  },
  {
    id: 2,
    name: "Charles Oliveira",
    nickname: "Do Bronx",
    age: 32,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-05/67583%252Fprofile-galery%252Ffullbodyleft-picture%252FOLIVEIRA_CHARLES_L_05-15.png?VersionId=null&itok=kQFueyqF",
    stance: "Orthodox",
    origin: "Brazil",
    record: "33-8-0",
  },
  {
    id: 3,
    name: "Israel Adesanya",
    nickname: "The Last Stylebender",
    age: 32,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-06/68129_profile-galery_fullbodyleft-picture_ADESANYA_ISRAEL_L_06-12.png?VersionId=null&itok=lddfaxZg",
    stance: "Orthodox",
    origin: "Lagos, Nigeria",
    record: "23-1-0",
  },
  {
    id: 4,
    name: "Francis Ngannou",
    nickname: "The Predator",
    age: 35,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-01/3d75a594-27a1-4c19-875a-8d7d4dc17b42%252FNGANNOU_FRANCIS_L_BELT_01-22.png?itok=EcfIjUew",
    stance: "Orthodox",
    origin: "Batie, Cameroon",
    record: "17-3-0",
  },
  {
    id: 5,
    name: "Aljamain Sterling",
    nickname: "Funk Master",
    age: 32,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-04/STERLING_ALJAMAIN_L_BELT_04-09.png?itok=9jHYZcT2",
    stance: "Southpaw",
    origin: "Long Island, US",
    record: "21-3-0",
  },
  {
    id: 6,
    name: "Dustin Poirier",
    nickname: "The Diamond",
    age: 33,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-07/67863%252Fprofile-galery%252Ffullbodyleft-picture%252FPOIRIER_DUSTIN_L_07-10.png?itok=Ym7t8LDY",
    stance: "Southpaw",
    origin: "Lafayette, US",
    record: "28-7-0",
  },
  {
    id: 7,
    name: "Max Holloway",
    nickname: "Blessed",
    age: 30,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-07/49b91c96-87a8-43ce-af9b-f9cac2c394d0%252FHOLLOWAY_MAX_L_07-02.png?itok=Kzzm6QwA",
    stance: "Orthodox",
    origin: "Waianae, US",
    record: "23-7-0",
  },
  {
    id: 8,
    name: "Jon Jones",
    nickname: "Bones",
    age: 34,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-09/JONES_JON_L_12-29.png?VersionId=_V_SgUOaxjt7ja7ddhcJB4m9ALbyeMJz&itok=kMklO45v",
    stance: "Switch",
    origin: "Rochester, US",
    record: "26-1-0",
  },
  {
    id: 9,
    name: "Stipe Miocic",
    nickname: "N/A",
    age: 39,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-03/MIOCIC_STIPE_L.png?VersionId=AvpdfeJOw_RIVkLQfyNsDDCkr7v26RtH&itok=tBa8SpCC",
    stance: "Orthodox",
    origin: "Euclid, US",
    record: "20-4-0",
  },
  {
    id: 10,
    name: "Petr Yan",
    nickname: "No Mercy",
    age: 29,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-10/69008%252Fprofile-galery%252Ffullbodyleft-picture%252FYAN_PETR_L_10-30.png?itok=El2YOHNK",
    stance: "Switch",
    origin: "Krasnoyarsk, Russia",
    record: "16-3-0",
  },
  {
    id: 11,
    name: "Glover Teixeira",
    nickname: "N/A",
    age: 42,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-11/68036%252Fprofile-galery%252Ffullbodyleft-picture%252FTEIXEIRA_GLOVER_L_10-30.png?itok=w8Jrh1f4",
    stance: "Orthodox",
    origin: "Gover Nador Valdares, Brazil",
    record: "33-8-0",
  },
  {
    id: 12,
    name: "Conor McGregor",
    nickname: "The Notorious",
    age: 33,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-07/MCGREGOR_CONOR_L_07-10.png?itok=xbg9Kwfj",
    stance: "Southpaw",
    origin: "Dublin, Ireland",
    record: "22-6-0",
  },
  {
    id: 13,
    name: "Tony Ferguson",
    nickname: "El Cucuy",
    age: 38,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-06/FERGUSON_TONY_L_05-07.png?itok=Q-waozUA",
    stance: "Orthodox",
    origin: "Oxnard, US",
    record: "26-7-0",
  },
  {
    id: 14,
    name: "Michael Chandler",
    nickname: "Iron",
    age: 36,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-05/1dd9466e-5d52-4a1d-8af9-201e9af35e6a%252FCHANDLER_MICHAEL_L_05-07.png?itok=SGvqtEC7",
    stance: "Orthodox",
    origin: "High Ridge, US",
    record: "23-7-0",
  },
  {
    id: 15,
    name: "Jorge Masvidal",
    nickname: "Gamebred",
    age: 37,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-07/MASVIDAL_JORGE_L_04-24.png?itok=xClc4NJc",
    stance: "Southpaw",
    origin: "Miami, US",
    record: "35-16-0",
  },
  {
    id: 16,
    name: "Colby Covington",
    nickname: "Chaos",
    age: 34,
    picture:
      "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-03/0b2f6b55-7a5d-49f1-9bc3-7076406d904f%252FCOVINGTON_COLBY_L_11-06.png?itok=9qVDWt-k",
    stance: "Southpaw",
    origin: "Clovis, US",
    record: "17-3-0",
  },
];

export default Fighters;
