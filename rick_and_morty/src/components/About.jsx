import { useEffect } from "react";

const About = ({agrupar}) => {

  useEffect(() => {
    agrupar(0,true);
  },[])

  return(
      <div className="about_contenedor">

        <h1>About us</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempora iure suscipit beatae omnis quibusdam repellendus est exercitationem reiciendis, quia recusandae totam harum blanditiis reprehenderit, voluptates deleniti eum autem fuga repudiandae sunt odit dolor fugit. In et autem maiores voluptate sapiente labore molestiae! Ad, laboriosam impedit perspiciatis distinctio nemo amet.</p>
        <p>Quam sit neque praesentium distinctio consequuntur, recusandae suscipit odio deleniti! Laboriosam iste optio hic modi dignissimos id necessitatibus, voluptatum architecto sapiente sit nisi fugit pariatur vero facere facilis tenetur iusto dolore aliquid corrupti perferendis tempora quos molestiae reprehenderit porro! Placeat tenetur, quibusdam ipsam optio perferendis nihil animi non voluptas atque!</p>
        <p>Quo iure ipsum, deleniti molestiae nostrum recusandae corporis saepe illo sint accusantium ad placeat assumenda hic beatae voluptatibus nulla. Aperiam quisquam nemo, consectetur amet autem optio facere minus facilis? Omnis ullam, reiciendis dolore nam laudantium repellat recusandae ipsa vero corporis dolorum et quae architecto! Quibusdam ullam velit dicta necessitatibus dolorum!</p>
        <p>Ut magni quisquam commodi praesentium, nesciunt error, odio quam ipsa enim quaerat atque iste vel incidunt quia necessitatibus totam repudiandae excepturi iusto alias nisi ab culpa quos non molestiae. Dolorum eaque corrupti vero expedita ab dignissimos eos ea commodi illum veniam adipisci, unde doloribus saepe. Ipsum rerum quo laboriosam officiis.</p>
      </div>
  ) 
}

export default About;