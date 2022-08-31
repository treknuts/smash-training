package dev.treknuts.smash_training_api.resolvers

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import dev.treknuts.smash_training_api.entities.Card
import dev.treknuts.smash_training_api.repositories.CardRepository
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.stereotype.Component

@Component
class CardQueryResolver(val cardRepository: CardRepository, private val mongoOperations: MongoOperations): GraphQLQueryResolver {

    fun cards(): List<Card> {
        return cardRepository.findAll()
    }

}