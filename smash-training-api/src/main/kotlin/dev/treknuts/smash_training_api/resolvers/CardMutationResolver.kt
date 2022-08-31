package dev.treknuts.smash_training_api.resolvers

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import dev.treknuts.smash_training_api.entities.Card
import dev.treknuts.smash_training_api.repositories.CardRepository
import org.springframework.stereotype.Component
import java.util.*

@Component
class CardMutationResolver(private val cardRepository: CardRepository): GraphQLMutationResolver {

    fun newCard(title: String, description: String, stage: String, enabled: Boolean, cpu: String, time: Int): Card {
        val card = Card(title = title, description = description, stage = stage, enabled = enabled, cpu = cpu, time = time)
        card.id = UUID.randomUUID().toString()
        cardRepository.save(card)
        return card
    }

    fun deleteCard(cardId: String): Boolean {
        cardRepository.deleteById(cardId)
        return true
    }

    fun toggleCard(cardId: String): Card {
        val card = cardRepository.findById(cardId)
        card.ifPresent {
            it.enabled = !it.enabled
        }
        return card.get()
    }

    fun updateCardTime(cardId: String, time: Int): Card {
        val card = cardRepository.findById(cardId)
        card.ifPresent {
            it.time = time
        }
        return card.get()
    }

}