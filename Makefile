# Hugo Blog Makefile
# Useful commands for managing the Hugo blog site

.PHONY: help dev build clean new new-tut new-proj new-review update-theme modules deploy init

# Default target - automatically generates help from target comments
help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-12s - %s\n", $$1, $$2}'

dev: ## Start development server with live reload
	hugo server -D --bind 0.0.0.0

build: ## Build the site for production
	hugo --environment production

clean: ## Clean the public directory and module cache
	rm -rf public/
	hugo mod clean

new: ## Create a new blog post (usage: make new <post-name>)
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Usage: make new <post-name>"; \
		exit 1; \
	fi
	hugo new content/posts/$(filter-out $@,$(MAKECMDGOALS)).md --kind default

new-tut: ## Create a new tutorial post (usage: make new-tutorial <post-name>)
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Usage: make new-tutorial <post-name>"; \
		exit 1; \
	fi
	hugo new content/posts/$(filter-out $@,$(MAKECMDGOALS)).md --kind tutorial

new-proj: ## Create a new project post (usage: make new-project <post-name>)
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Usage: make new-project <post-name>"; \
		exit 1; \
	fi
	hugo new content/posts/$(filter-out $@,$(MAKECMDGOALS)).md --kind project

new-review: ## Create a new review post (usage: make new-review <post-name>)
	@if [ -z "$(filter-out $@,$(MAKECMDGOALS))" ]; then \
		echo "Usage: make new-review <post-name>"; \
		exit 1; \
	fi
	hugo new content/posts/$(filter-out $@,$(MAKECMDGOALS)).md --kind review

# Catch-all target to handle post name arguments
%:
	@:

update-theme: ## Update the hugo-coder theme submodule
	git submodule update --remote themes/hugo-coder

modules: ## Update Hugo modules
	hugo mod get -u
	hugo mod graph

deploy: clean ## Clean build for deployment
	hugo --environment production

init: ## Initialize submodules (for fresh clones)
	git submodule update --init --recursive
