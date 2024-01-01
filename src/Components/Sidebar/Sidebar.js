import {Sidebar} from "flowbite-react";
import {getCommandCategories, getCommands} from "../../actions";
import {useEffect, useState} from "react";


function LeftSidebar({setActiveCommand}) {
    const [sidebarCategories, setSidebarCategories] = useState({});
    const fetchSidebarContent = async () => {
        try {
            const {documents} = await getCommandCategories();
            documents.map((categories) => {
                getCommands(categories.$id).then((commands) => {
                    setSidebarCategories((prevValues) => {
                        return {
                            ...prevValues,
                            [categories.category]: commands.documents,
                        };
                    });
                })
            })

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchSidebarContent();
    }, []);

    return (
        <Sidebar className="mt-2" aria-label="Commands">
            <Sidebar.Items>
                <Sidebar.ItemGroup>

                    {Object.keys(sidebarCategories).map((value, key) => (
                        <Sidebar.Collapse key={value} label={value}>
                            {sidebarCategories[value].length ? sidebarCategories[value].map((command) => (
                                <Sidebar.Item onClick={() => setActiveCommand(command)} href="#">{command.title}</Sidebar.Item>
                            )) : "No command added"}
                        </Sidebar.Collapse>
                    ))}

                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default LeftSidebar;