import Link from "next/link";
import React, { FC } from "react";

const Faq: FC = () => {
  return (
    
<div className="container my-24 mx-auto md:px-6">
 
  <section className="mb-32">
    <div className="grid gap-4 md:grid-cols-2">
      <div className="mb-6 md:mb-0">
        <h2 className="mb-6 text-4xl font-bold">Frequently asked questions</h2>

        <p className="text-gray-600 text-lg">
          Didn't find your answer in the FAQ?
          <Link href="/contact"
            className="text-indigo-600 hover:text-indigo-700"> Contact us</Link>
        </p>
      </div>

      <div className="mb-6 md:mb-0">
        <p className="mb-4 font-bold text-xl">Anim pariatur cliche reprehenderit?</p>
        <p className="mb-12 text-gray-600 text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          autem numquam dolore molestias aperiam culpa alias veritatis
          architecto eos, molestiae vitae ex eligendi libero eveniet
          dolorem, doloremque rem aliquid perferendis.
        </p>

        <p className="mb-4 font-bold text-xl">Non cupidatat skateboard dolor brunch?</p>
        <p className="mb-12 text-gray-600 text-base">
          Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
          magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
          iusto minus et suscipit? Minima sunt at nulla tenetur, numquam
          unde quod modi magnam ab deserunt ipsam sint aliquid dolores
          libero repellendus cupiditate mollitia quidem dolorem odit
        </p>

        <p className="mb-4 font-bold text-xl">
          Praesentium voluptatibus temporibus consequatur non aspernatur?
        </p>
        <p className="mb-12 text-gray-600 text-base">
          Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
          deserunt ipsam sint aliquid dolores libero repellendus cupiditate
          mollitia quidem dolorem.
        </p>
      </div>
    </div>
  </section>
 
</div>

  );
};

export default Faq;
