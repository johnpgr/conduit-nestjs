import { Favorite, InsertFavorite, favorite } from "@/favorites/favorite.model"
import { DefaultDrizzlePgRepository } from "@/repositories/default-drizzle-pg"
import { DrizzleService } from "@/drizzle/drizzle.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class FavoriteRepository extends DefaultDrizzlePgRepository<
    typeof favorite,
    Favorite,
    InsertFavorite
> {
    constructor(drizzleService: DrizzleService) {
        super(favorite, drizzleService)
    }
}
