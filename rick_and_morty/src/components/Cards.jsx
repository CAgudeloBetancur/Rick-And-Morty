import Card from './Card';

export default function Cards({characters,onClose,agrupar,classOcultar}) {
   return (
      <div className={`cards_contenedor${classOcultar}`}>
         {characters.map( (x) => {
            return (
               <Card
                  agrupar={agrupar}
                  onClose={onClose}
                  image={x.image}
                  key={x.id}
                  id={x.id}
                  name={x.name}
                  status={x.status}
                  species={x.species}
                  gender={x.gender}
                  origin={x.origin.name}
               />
            )
         })}
      </div>
   );
}
