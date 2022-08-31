package dev.treknuts.smash_training_api.repositories

import dev.treknuts.smash_training_api.entities.Card
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface CardRepository: MongoRepository<Card, String> {}