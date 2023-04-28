import React from 'react'
import CatalogViewer from './CatalogViewer'

const imageData = [
  {
    src: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Image 1',
    details: 'Details about image 1 .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius molestiae iusto facere. Aut necessitatibus rerum illum iste laboriosam itaque voluptas quasi perferendis molestias exercitationem quia ducimus earum omnis deserunt amet, numquam facere placeat et quas! Nemo illum, iusto asperiores eligendi reiciendis cupiditate similique exercitationem, dolore assumenda soluta corporis fugiat earum non obcaecati, quaerat nostrum aut nisi veniam. Officia natus debitis dolorum aspernatur, non qui quia ex repellendus, illo iusto repellat necessitatibus est earum quas rerum numquam, atque voluptas! Laborum, enim perferendis? Consectetur optio veritatis iste delectus architecto suscipit. Eos delectus inventore quis totam? Dolor enim molestiae eum modi quia.',
  },
  {
    src: 'https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Image 2',
    details: 'Details about image 2 . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius molestiae iusto facere. Aut necessitatibus rerum illum iste laboriosam itaque voluptas quasi perferendis molestias exercitationem quia ducimus earum omnis deserunt amet, numquam facere placeat et quas! Nemo illum, iusto asperiores eligendi reiciendis cupiditate similique exercitationem, dolore assumenda soluta corporis fugiat earum non obcaecati, quaerat nostrum aut nisi veniam. Officia natus debitis dolorum aspernatur, non qui quia ex repellendus, illo iusto repellat necessitatibus est earum quas rerum numquam, atque voluptas! Laborum, enim perferendis? Consectetur optio veritatis iste delectus architecto suscipit. Eos delectus inventore quis totam? Dolor enim molestiae eum modi quia.',
  },
  {
    src: 'https://images.pexels.com/photos/1227571/pexels-photo-1227571.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Image 3',
    details: 'Details about image 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius molestiae iusto facere. Aut necessitatibus rerum illum iste laboriosam itaque voluptas quasi perferendis molestias exercitationem quia ducimus earum omnis deserunt amet, numquam facere placeat et quas! Nemo illum, iusto asperiores eligendi reiciendis cupiditate similique exercitationem, dolore assumenda soluta corporis fugiat earum non obcaecati, quaerat nostrum aut nisi veniam. Officia natus debitis dolorum aspernatur, non qui quia ex repellendus, illo iusto repellat necessitatibus est earum quas rerum numquam, atque voluptas! Laborum, enim perferendis? Consectetur optio veritatis iste delectus architecto suscipit. Eos delectus inventore quis totam? Dolor enim molestiae eum modi quia.',
  },
  {
    src: 'https://images.pexels.com/photos/2064706/pexels-photo-2064706.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Image 4',
    details: 'Details about image 4.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius molestiae iusto facere. Aut necessitatibus rerum illum iste laboriosam itaque voluptas quasi perferendis molestias exercitationem quia ducimus earum omnis deserunt amet, numquam facere placeat et quas! Nemo illum, iusto asperiores eligendi reiciendis cupiditate similique exercitationem, dolore assumenda soluta corporis fugiat earum non obcaecati, quaerat nostrum aut nisi veniam. Officia natus debitis dolorum aspernatur, non qui quia ex repellendus, illo iusto repellat necessitatibus est earum quas rerum numquam, atque voluptas! Laborum, enim perferendis? Consectetur optio veritatis iste delectus architecto suscipit. Eos delectus inventore quis totam? Dolor enim molestiae eum modi quia.',
  },
  {
    src: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Image 5',
    details: 'Details about image 5.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius molestiae iusto facere. Aut necessitatibus rerum illum iste laboriosam itaque voluptas quasi perferendis molestias exercitationem quia ducimus earum omnis deserunt amet, numquam facere placeat et quas! Nemo illum, iusto asperiores eligendi reiciendis cupiditate similique exercitationem, dolore assumenda soluta corporis fugiat earum non obcaecati, quaerat nostrum aut nisi veniam. Officia natus debitis dolorum aspernatur, non qui quia ex repellendus, illo iusto repellat necessitatibus est earum quas rerum numquam, atque voluptas! Laborum, enim perferendis? Consectetur optio veritatis iste delectus architecto suscipit. Eos delectus inventore quis totam? Dolor enim molestiae eum modi quia.',
  },
  {
    src: 'https://images.pexels.com/photos/122244/pexels-photo-122244.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt:'Image 6',
    details: 'Details about image 6.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius molestiae iusto facere. Aut necessitatibus rerum illum iste laboriosam itaque voluptas quasi perferendis molestias exercitationem quia ducimus earum omnis deserunt amet, numquam facere placeat et quas! Nemo illum, iusto asperiores eligendi reiciendis cupiditate similique exercitationem, dolore assumenda soluta corporis fugiat earum non obcaecati, quaerat nostrum aut nisi veniam. Officia natus debitis dolorum aspernatur, non qui quia ex repellendus, illo iusto repellat necessitatibus est earum quas rerum numquam, atque voluptas! Laborum, enim perferendis? Consectetur optio veritatis iste delectus architecto suscipit. Eos delectus inventore quis totam? Dolor enim molestiae eum modi quia.',
  },
];



const App = () => {
  return (
    <div>
      <CatalogViewer imageData={imageData}/>
    </div>
    
  )
}

export default App