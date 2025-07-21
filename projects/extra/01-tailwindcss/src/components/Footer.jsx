export default function Footer() {
  return (
    <footer className="bg-[#F2E4CE] text-black p-5 mt-10">
      <section className="container mx-auto flex justify-between max-w-5xl items-center">
        <div>
          <h3 className="font-semibold text-xl">Customer Service</h3>
          <ul>
            <li><a className="hover:text-blue-400" href="#">Contact us</a></li>
            <li><a className="hover:text-blue-400" href="#">Returns</a></li>
            <li><a className="hover:text-blue-400" href="#">Order Status</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl">Company</h3>
          <ul>
            <li><a className="hover:text-blue-400" href="#">About us</a></li>
            <li><a className="hover:text-blue-400" href="#">Carrers</a></li>
            <li><a className="hover:text-blue-400" href="#">Press</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl">Legal</h3>
          <ul>
            <li><a className="hover:text-blue-400" href="#">Privacy policy</a></li>
            <li><a className="hover:text-blue-400" href="#">Terms of use</a></li>
            <li><a className="hover:text-blue-400" href="#">Sisternap</a></li>
          </ul>
        </div>

      </section>

    </footer>
  )
}
