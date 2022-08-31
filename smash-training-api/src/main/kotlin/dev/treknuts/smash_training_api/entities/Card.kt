package dev.treknuts.smash_training_api.entities

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "cards")
data class Card(
    var title: String,
    var description: String,
    var stage: String,
    var enabled: Boolean,
    var cpu: String,
    var time: Int
) {
    @Id
    var id: String = ""
}
