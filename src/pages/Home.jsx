import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";
import Layout from "../components/Layout";

import { contentfulClient } from "../utils/createContentfulClient";
import Pagination from 'react-bootstrap/Pagination';

function Home() {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getCategories = async () => {
        try {
            const response = await contentfulClient.getEntries({
                content_type: 'blogCategory',
            });

            setCategories(response.items);
        } catch (error) {
            console.log('Erro ao obter categorias', error);
            setCategories([]);
        }
    };

    const getPosts = async (page = 1) => {
        try {
            const limit = 1;
            const response = await contentfulClient.getEntries({
                content_type: 'blogPost5j',
                limit: limit,
                skip: (page - 1) * limit,
                order: '-sys.createdAt',
            });

            setPosts(response.items);
            setTotalPages(Math.ceil(response.total / limit));
        } catch (error) {
            console.log('Erro ao obter posts', error);
            setPosts([]);
        }
    };

    useEffect(() => {
        getCategories();
        getPosts(currentPage);
    }, [currentPage]); // useEffect -> onLoad do componente Home

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Layout>
            <div className="container my-4">
                <div className="row">
                    <main className="col-md-8">
                        <h2 className="mb-3">
                            Posts recentes
                        </h2>

                        {posts.map((item) => (
                            <Card
                                key={item.sys.id}
                                title={item.fields.blogPostTitle}
                                text={item.fields.blogPostDescription}
                                link={'/post/' + item.fields.blogPostSlug}
                            />
                        ))}

                        <Pagination>
                            <Pagination.Prev
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            />
                            {Array.from({ length: totalPages }, (_, index) => (
                                <Pagination.Item
                                    key={index + 1}
                                    active={index + 1 === currentPage}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                            />
                        </Pagination>

                        <Link to="/post" className="btn btn-dark mt-4">
                            Ver todos os posts
                        </Link>
                    </main>
                    <aside className="col-md-4">
                        <h2>Categorias</h2>

                        <ul>
                            {categories.map((item) => (
                                <li key={item.sys.id}>{item.fields.blogCategoryTitle}</li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
