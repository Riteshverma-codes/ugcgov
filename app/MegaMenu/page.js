const MegaMenu = ({ data }) => {
    return (
        <div className=" absolute left-1/2 top-full -translate-x-[40%]
      hidden group-hover:block bg-white text-gray-800
      w-[900] shadow-xl border-t-4 border-orange-500 z-50">

            <div className="grid grid-cols-3 gap-10 px-10 py-8">
                {data.columns.map((col, i) => (
                    <div key={i}>
                        {col.title && (
                            <h4 className="text-orange-500 font-semibold mb-3">
                                {col.title}
                            </h4>
                        )}

                        <ul className="space-y-2 text-sm">
                            {col.links.map((link, j) => (
                                <li
                                    key={j}
                                    className="flex items-center gap-2 hover:text-orange-500 cursor-pointer"
                                >
                                    ➜ {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
