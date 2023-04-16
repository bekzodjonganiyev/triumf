import {Outlet, Link} from "react-router-dom"

import a from "../../assets/images/aa.png";

export const CouriersProfile = () => {
  return (
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem itaque similique sequi tempora voluptates quas eveniet aut ad asperiores dolorum suscipit laudantium maiores quae sit voluptatibus iusto non est, quo in delectus ab quos repellat nobis vero! Molestiae corrupti, nihil modi quaerat perferendis mollitia suscipit alias eveniet iusto placeat, dolor praesentium quisquam? Iste totam libero ullam quos, quibusdam odio dolorem dolore maxime! Voluptates dolores sit provident illum delectus atque accusamus, adipisci dolorem aut earum excepturi dolorum dignissimos omnis ex ipsam recusandae esse, asperiores saepe eos expedita minus at officia possimus! Dolore quas tempora, aperiam numquam fugiat magni culpa expedita voluptas.
        <ul className="flex gap-10 mt-10">
            <li>
                <Link to="statistika">Statistika</Link>
            </li>
            <li>
                <Link to="xisob">Xisob-kitob</Link>
            </li>
            <li>
                <Link to="arxiv">Arvix</Link>
            </li>
        </ul>
      <Outlet />
    </div>
  );
};
