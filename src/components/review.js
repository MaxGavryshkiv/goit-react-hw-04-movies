import React, { Component } from 'react';
import Axios from 'axios';

class Cast extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;
    console.log(movieId);
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d939c9834c714302e4aa1e60bbc82061&language=en-US&page=1`,
    );
    console.log(response.data);

    //   adult: false;
    //   cast_id: 8;
    //   character: 'George Washington (voice)';
    //   credit_id: '6089bce0fcec2e00290807ea';
    //   gender: 2;
    //   id: 38673;
    //   known_for_department: 'Acting';
    //   name: 'Channing Tatum';
    //   order: 0;
    //   original_name: 'Channing Tatum';
    //   popularity: 7.452;
    //   profile_path: '/bhTmp6FA8fOQnGlNk75tdmj2bpu.jpg';

    this.setState({
      reviews: response.data.results,
    });
  }

  render() {
    const { reviews } = this.state;
    // const imgPath = 'https://image.tmdb.org/t/p/w300';
    console.log(reviews.total_results);
    return (
      <>
        <h1>Обзори</h1>
        {(reviews && <p>we don`t have reviews</p>) ||
          reviews.map(result => (
            <li key={result.id}>
              <p>{result.content}</p>
            </li>
          ))}
        {/* {reviews.results.map(result => console.log(result))} */}
        {/* <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img src={`${imgPath}${actor.profile_path}`} alt={actor.name} />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul> */}

        {/* author: "John Chard"
author_details: {name: "", username: "John Chard", avatar_path: "/utEXl2EDiXBK6f41wCLsvprvMg4.jpg", rating: 9}
content: "It's not who I am underneath, but what I do that defines me.\r\n\r\nBruce Wayne is constantly tortured by his childhood memories when he witnessed his parents being murdered. Taken under the wing of The League Of Shadows, a deadly ninja assassin army devoted to erasing crime with their own brand of harsh justice. After completing training, Wayne refuses to join them on account of not agreeing with their methods, he returns to Gotham City to reek his own one man war against crime.\r\n\r\nDirector Christopher Nolan literally goes back to Batman origins to not just give the dead franchise a kiss of life, but actually to spark it into a sort of triumphant homecoming. Gone is all forms of camp veneer so evident in Joel Schumacher's offerings, and in place we have a darkly rich picture intent on fleshing out Batman's motives, and crucially, his fractured persona.\r\n\r\nOne of the most pleasing things to me was that Nolan paced this picture to perfection, the build up of character, and then birth of the Bat, dominates for practically the first hour of the piece. This gives Batman Begins some crucial heart, it really helps us to focus on this weird super-hero now that we have some meat on his bones. We then follow Wayne from a Chinese prison to The League Of Shadows monastery, watching his transformation from brawling man of anger into a controlled fighting machine. A machine that still roams with a revenge laden heart.\r\n\r\nThen its to Gotham City where he then births Batman and all bad guys are on his agenda. Mob boss Falcone, the mysterious Scarecrow, and also a face from his past that rears its surprising head. Wayne is driven by powerful motives, and it's here in the second part of the film that Batman Begins rewards those who indulged in the character build up. In come the stunts and outrageous sequences, all played out in Nolan's desperately dank Gotham City (a far cry from Tim Burton's dark Oz like scapes). This Gotham is pot boiling to disaster and is crying out for the Bat to sweep all before it, and thankfully Nolan and his cast fulfil all the early promise to deliver a wonderful action fantasy that caters for all ages.\r\n\r\nChristian Bale dons the Batsuit and it fits like a glove, his Bruce Wayne may lack the ebullient charisma that Michael Keaton's had, but his Batman is mean and moody and comfortable with the zippy dialogue. Michael Caine plays Alfred the loyal servant to the Wayne family, much heart and emotive drive from Caine ensures the role is a roaring success. Cillian Murphy is Dr Jonathan Crane/Scarecrow who actually scares more as Crane with his piercing eyes and devilishly smirky leer, whilst both Gary Oldman (Jim Gordon) & Morgan Freeman (Lucius Fox) are solid with what little they actually have to do. Liam Neeson gets his teeth into a meaty role as Henri Ducard, and as a character arc he gets the best scenes (Nolan clearly having great fun here).\r\n\r\nMinnor let downs to me without hurting the picture are Katie Holmes (pretty but hardly convincing as Assistant D.A. Rachael Dawes) and Rutger Hauer as Earle (a little bit of menace wouldn't go amiss here Rutger old man). Still, as I said they are very minor let downs because as comic book adaptations go, Batman Begins is from the top draw, a franchise re-suited, rebooted and completely reinvigorated. But now the test comes with that all important sequel... 9/10"
created_at: "2014-09-25T23:35:08.775Z"
id: "5424a6ac0e0a264576000114"
updated_at: "2021-06-23T15:57:28.718Z"
url: "https://www.themoviedb.org/review/5424a6ac0e0a264576000114" */}
      </>
    );
  }
}

export default Cast;
