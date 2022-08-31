package dev.treknuts.smash_training_api

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@SpringBootApplication
class SmashTrainingServerApplication

fun main(args: Array<String>) {
	runApplication<SmashTrainingServerApplication>(*args)
}
