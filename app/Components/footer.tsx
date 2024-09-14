export default function Footer() {
  return (
    <footer className="bg-black px-5 text-white py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
        <div>
          <h3 className="font-bold text-lg">Incruiter</h3>
          <ul className="space-y-2 mt-2">
            <li>Org.nr: 94099566</li>
            <li>Ole Deviks vei 4, 0666 Oslo</li>
            <li>kontakt@instacruit.no</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Om Xcruiter</h3>
          <ul className="space-y-2 mt-2">
            <li>
              <a href="#" className="hover:underline">
                Om oss
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kontakt oss
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Personvern
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Bruker</h3>
          <ul className="space-y-2 mt-2">
            <li>
              <a href="#" className="hover:underline">
                Logg inn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Avmelding
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
