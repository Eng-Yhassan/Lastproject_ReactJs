export default function ICONS(props) {
    return (
        <div className="flex flex-col items-center text-center px-6 mt-10">
            <div className="bg-indigo-100 p-4 rounded-full">
                <i className={`${props.icon} text-4xl text-indigo-600`}></i>
            </div>
            <h1 className="mt-4 text-xl font-semibold">{props.titles}</h1>
            <p className="mt-2 text-gray-600 max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic necessitatibus repudiandae incidunt.</p>
        </div>
    );
}
