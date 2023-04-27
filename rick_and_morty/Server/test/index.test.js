const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe('Test de rutas',() => {
  
  describe('GET /rickandmorty/character/:id',() => {
    
    it('Responde con status: 200', async () => {
      await request.get('/rickandmorty/character/1').expect(200);
    })

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const {body} = await request.get('/rickandmorty/character/1')

      const obj = {
        id: 932,
        name: 'Dai',
        species: 'Human',
        origin: {
          name: 'Earth (C-137)'
        },
        image: 'image.jpg',
        gender: 'Female',
        status: 'Alive'
      }

      for(const prop in obj) {
        expect(body).toHaveProperty(prop);
      }

    })

    
    it('Si hay un error responde con status: 500',async () => {
      const response = await request.get('/rickandmorty/character/900')
      expect(response.statusCode).toBe(500);
    })

  })

  describe( "GET /rickandmorty/login", () => {

    it('Permite acceso con datos correctos', async () => {
      const {body} = await request.get("/rickandmorty/login/?email=camiloab97@gmail.com&password=camilo97b")
      expect(body).toEqual({access: true})
    })

    it('Niega el acceso con datos incorrectos', async () => {
      const {body} = await request.get("/rickandmorty/login/?email=camilo3@gmail.com&password=camilo66b")
      expect(body).toEqual({access: false})
    })

  })

  describe("POST /rickandmorty/fav",() => {

    it('Devuelve un arreglo',async () => {

      const {body} = await request.post('/rickandmorty/fav').send({
        id: 3,
        name: "Camilo"
      })

      expect(body).toEqual([
        {
          id: 3,
          name: "Camilo"
        }
      ])

    })

    it('Si enviamos otro elemento, debe devolverlo junto con lo anterior',async () => {



      /* const {body} = await request.post('/rickandmorty/fav').send({
        id: 5,
        name: "Lien"
      })

      expect(body).toEqual([
        {
          id: 3,
          name: "Camilo"
        },
        {
          id: 5,
          name: "Lien"
        }
      ]) */

    })


  })
  
  /* describe("DELETE /rickandmorty/fav/:id",() => {

    it()

  }) */

})