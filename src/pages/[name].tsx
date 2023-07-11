import React from "react";
import styles from '@/styles/Home.module.css';
import { getAllPosts, getPostByName } from "@/utils/api";
import { Cat } from "@/utils/Types";

type Props = {
    cat: Cat;
};

export async function getStaticProps({ params }: any) {
    const cat: Cat[] = await getPostByName(params.name);
  
    return {
      props: {
        cat,
      },
    };
 }

 // cats/komomo, cats/kotaro... 動的ルーティング
export async function getStaticPaths() {
    const cats = await getAllPosts();
    const paths =  cats.map((cat: Cat) => ({
        params: { name: cat.name },
    }));
    
    return {
        paths,
        fallback: false,
    };
}

const Post = ( { cat }: Props) => {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat.name}の話</h1>
        <p className={styles.content}>{cat.name}は{cat.breed}で{cat.age}歳です。可愛いよ</p>
    </div>
    );
};

export default Post