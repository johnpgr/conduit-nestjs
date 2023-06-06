import { AbstractEntity } from "@/common/abstract.entity"
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm"
import { ArticleEntity } from "../articles/article.entity"
import { CommentEntity } from "../comment/comment.entity"
import { IUserEntity } from "./interfaces/entity"

@Entity({ name: "user" })
export class UserEntity extends AbstractEntity implements IUserEntity {
    @Column({ unique: true, length: 16 })
    name: string

    @Column({ unique: true, length: 255 })
    email: string

    @Column({ nullable: true, type: "timestamp", name: "email_verified_at" })
    emailVerifiedAt: Date

    @Column({ length: 255 })
    password: string

    @Column({ nullable: true, length: 255 })
    image: string

    @Column({ nullable: true, type: "text" })
    bio: string

    @OneToMany(() => ArticleEntity, (article) => article.author)
    //@ts-expect-error idk
    articles: ArticleEntity[]

    @OneToMany(() => CommentEntity, (comment) => comment.author)
    comments: CommentEntity[]

    @ManyToMany(() => UserEntity, (user) => user.followers)
    @JoinTable({
        joinColumn: {
            name: "followed_id",
        },
        inverseJoinColumn: {
            name: "follower_id",
        },
    })
    //@ts-expect-error idk
    following: UserEntity[]

    @ManyToMany(() => UserEntity, (user) => user.following)
    //@ts-expect-error idk
    followers: UserEntity[]

    @ManyToMany(() => ArticleEntity, (article) => article.favoritedBy)
    //@ts-expect-error idk
    favorites: ArticleEntity[]

    setName(name?: string): UserEntity {
        if (!name) return this

        this.name = name
        return this
    }

    setEmail(email?: string): UserEntity {
        if (!email) return this
        this.email = email
        return this
    }

    setPassword(password?: string): UserEntity {
        if (!password) return this
        this.password = password
        return this
    }

    setImage(image?: string | null): UserEntity {
        if (image === undefined) return this

        //@ts-expect-error idk
        this.image = image

        return this
    }

    setBio(bio?: string | null): UserEntity {
        if (bio === undefined) return this

        //@ts-expect-error idk
        this.bio = bio

        return this
    }
}