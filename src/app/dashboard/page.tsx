// src/app/dashboard/page.tsx
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-800">
      <header className="bg-[#014D65] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MiV Dashboard</h1>
        <div className="space-x-3">
          <input type="text" placeholder="Search..." className="px-3 py-2 rounded-md text-black" />
          <button className="bg-blue-500 px-4 py-2 rounded-md">Share</button>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded shadow-md col-span-1">
          <h2 className="text-sm font-semibold">Readiness Score</h2>
          <p className="text-3xl font-bold">75%</p>
        </div>

        <div className="bg-white p-6 rounded shadow-md col-span-1">
          <h2 className="text-sm font-semibold">Quarterly Revenue</h2>
          <p className="text-2xl font-bold">$45,678.90</p>
          <p className="text-green-500 text-sm">+35% month over month</p>
        </div>

        <div className="bg-white p-6 rounded shadow-md col-span-1">
          <h2 className="text-sm font-semibold">Title</h2>
          <p className="text-2xl font-bold">10,353</p>
          <p className="text-red-500 text-sm">-5% month over month</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-semibold mb-2">Financials</h3>
          <Image
            src="/assets/linechart-placeholder.png"
            alt="Line chart"
            width={600}
            height={300}
            className="w-full h-48 object-contain"
          />
        </div>

        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-semibold mb-2">Investors</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Helena</strong> – helena@domain.net</li>
            <li><strong>Oscar</strong> – oscar@domain.net</li>
            <li><strong>Daniel</strong> – daniel@domain.net</li>
            <li><strong>Mark Rojas</strong> – mark@domain.net</li>
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-semibold mb-2">KPIs</h3>
          <ul className="text-sm space-y-1">
            <li>website.net – 4033</li>
            <li>website.net – 3204</li>
            <li>website.net – 1714</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-semibold mb-2">Title</h3>
          <Image
            src="/assets/barchart-placeholder.png"
            alt="Bar chart"
            width={600}
            height={300}
            className="w-full h-48 object-contain"
          />
        </div>
      </section>
    </div>
  );
}
